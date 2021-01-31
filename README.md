## Wolt Summer 2021 intern - backend
#### Features added
- [x] Always returns restaurants at a 1.5 km radius
- [x] Always shows restaurants with 'online' as true first
- [x] Returns "Popular Restaurants" section with restaurants in descending order of popularity.
- [x] Returns "New Restaurants" section with restaurants which have the latest launch_date and does not show restaurants older than 4 months from current date - [see more](#changing-date-to-get-some-data-in-new-restaurants-section).
- [x] Returns "Nearby Restaurants" section with restaurants in ascending order of distance.
- [x]  Never returns more than 10 restaurants in each section

#### Additional features
- [x] Added a new parameter to restaurants  - 'distance'. It shows distance in kilometers from the queried coordinates.
- [x] Unit tests with 100% coverage.

### Setup
```
git clone https://github.com/shambu2k/wolt-summer-2021-assignment.git
npm install
```
### Starting API
`npm start`

### Running tests
`npm run tests`

#### Note
Make sure you have nothing running on port - 8080, otherwise change the port in the `src/app.ts` file.

#### Changing date to get some data in New Restaurants section
The launch dates in the current data given are quite old and may return an empty list because it does not show new restaurants with launch dates older than 4 months - this is based on the current date. 
However, say you don't want to have the current date as reference and put a custom date for example "2021-01-29" go to the `src/api/controllers/data_retrieve/NewRestaurants.ts`  file and in line 17, change `const  fourMonthsAgo = new  Date();` to `const  fourMonthsAgo = new  Date("2021-01-29");`