**Interface**:
1. List of all the products from the sample data provided.
2. Styled using Bulma CSS framework 
3. "Add to Cart" button just adds the product to the cart page and updates it quantity.
4. In the interest of time kept the "Add to Cart" functionality just to give an e-commerce website appeal.

**Domain**:
1. The list of product displays if it will be shipped on wekeends or not.
2. There is a date picker which has current server date selected as default.
3. User can select a new date from the datepicker.
4. Maximum shipping date is calculated based on the selected or default date.
5. The utility function located at src/utils/util.js calculates shipping date based on weekends and holidays.
6. 
**Deployment**:
1. The application is hosted using Github pages.
2. I have used the branch base approach to host on github pages 

**The deployed app is available at : <link>https://surabhigovil.github.io/AccumulaTest/</link>**

After clicking on the URL above, please select products tab to view and update shipping dates.

**Running the app locally:**

**Requirements**:
1.Node.js

**Installations Steps:**
1. Clone repo
2. Run npm install
3. Run ./backend/db.json --port 3001 to start the backend server
4. Run npm start to start the Create React App dev server
5. Visit http://localhost:3000/

**Screenshots**:
1. User changes date from dropdown and screenshot below shows max shipping date based on that:
<img width="1437" alt="Screen Shot 2023-03-20 at 8 33 16 AM" src="https://user-images.githubusercontent.com/10840984/226414316-a1ed7b2a-e05a-437f-b5ba-a6baa875a45b.png">
2. User changes date from dropdown and screenshot below shows max shipping date for an item available to ship on weekends based on that:
<img width="1433" alt="Screen Shot 2023-03-20 at 9 18 57 AM" src="https://user-images.githubusercontent.com/10840984/226414443-616d9d39-b710-476a-888c-582a54bb08fd.png">
