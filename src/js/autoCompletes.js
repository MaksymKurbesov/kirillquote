import { SphericalUtil } from 'node-geometry-library'

let latLngFrom
let latLngTo

function autoCompletes(map) {
    new Autocomplete('search', {
        selectFirst: true,

        howManyCharacters: 2,

        onSearch: ({ currentValue }) => {
            const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(
                currentValue
            )}`

            return new Promise((resolve) => {
                fetch(api)
                    .then((response) => response.json())
                    .then((data) => {
                        resolve(data.features)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
        },

        onResults: ({ currentValue, matches, template }) => {
            const regex = new RegExp(currentValue, 'gi')
            return matches === 0
                ? template
                : matches
                      .map((element) => {
                          return `
          <li class="loupe">
            <p>
              ${element.properties.display_name.replace(
                  regex,
                  (str) => `<b>${str}</b>`
              )}
            </p>
          </li> `
                      })
                      .join('')
        },

        onSubmit: ({ object }) => {
            map.eachLayer(function (layer) {
                if (!!layer.toGeoJSON) {
                    map.removeLayer(layer)
                }
            })

            const { display_name } = object.properties
            const [lng, lat] = object.geometry.coordinates
            latLngFrom = {
                lat: object.geometry.coordinates[0],
                lng: object.geometry.coordinates[1],
            }

            console.log('submit')

            // latLngFrom = new google.maps.LatLng(lng, lat)

            const marker = L.marker([lat, lng], {
                title: display_name,
            })

            marker.addTo(map).bindPopup(display_name)

            map.setView([lat, lng], 8)
        },

        onSelectedItem: ({ index, element, object }) => {
            // console.log('onSelectedItem:', index, element, object)
        },

        noResults: ({ currentValue, template }) =>
            template(`<li>No results found: "${currentValue}"</li>`),
    })

    new Autocomplete('search2', {
        selectFirst: true,
        howManyCharacters: 2,
        // onSearch
        onSearch: ({ currentValue }) => {
            const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(
                currentValue
            )}`

            return new Promise((resolve) => {
                fetch(api)
                    .then((response) => response.json())
                    .then((data) => {
                        resolve(data.features)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
        },

        onResults: ({ currentValue, matches, template }) => {
            const regex = new RegExp(currentValue, 'gi')

            return matches === 0
                ? template
                : matches
                      .map((element) => {
                          return `
          <li class="loupe">
            <p>
              ${element.properties.display_name.replace(
                  regex,
                  (str) => `<b>${str}</b>`
              )}
            </p>
          </li> `
                      })
                      .join('')
        },

        onSubmit: ({ object }) => {
            map.eachLayer(function (layer) {
                if (!!layer.toGeoJSON) {
                    map.removeLayer(layer)
                }
            })

            const { display_name } = object.properties
            const [lng, lat] = object.geometry.coordinates

            latLngTo = {
                lat: object.geometry.coordinates[0],
                lng: object.geometry.coordinates[1],
            }

            const marker = L.marker([lat, lng], {
                title: display_name,
            })

            marker.addTo(map).bindPopup(display_name)

            map.setView([lat, lng], 8)
        },

        onSelectedItem: ({ index, element, object }) => {
            // console.log('onSelectedItem:', index, element, object)
        },

        noResults: ({ currentValue, template }) =>
            template(`<li>No results found: "${currentValue}"</li>`),
    })
}

const getDistance = () => {
    return SphericalUtil.computeDistanceBetween(latLngFrom, latLngTo)
}

export { autoCompletes, getDistance }
