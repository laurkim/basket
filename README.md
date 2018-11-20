# Basket 
![Basket-Demo](demo-material/basket-demo.gif)

## Description 
Basket allows for multiple people to keep track of all their communal necessities on a shared grocery list, eradicating the purchase of unneeded goods! Compiled from a React app built without any scaffolding and styled with Sass, Basket renders a list of the daily deals in the market. 

Users can pick to add an item to their cart, which opens a modal that prompts users to input the quantity of the items they would like to purchase. Users can either add the item(s) to their cart or, if they have a sudden change of heart, click the button to go back and return to the list of today's deals. 

In the cart, items are listed by their quantity and name. Users are given the functionality to delete an item incrementally, should they decide they might have overestimated the quantity of the item they needed. If an item's quantity is larger than 1, Basket will continue decrementing the amount of the item in the card. However, when there is only one item left, the item will be completely removed from the card and, in the "Today's Deals" section, the button will toggle from being disabled with a message of "Item in Cart" to now enabled and a message of "Pick a Quantity" to allow users to add items again. 

As an extra feature, users are able to sort the items in their cart chronologically, based on the order in which items were add, or in descending order based on the quantity of the items. Using a sorting method, Basket will compare the quantity of each item in the shopping basket against each other to order them from largest quantity to smallest, thereby allowing users to see instantly what goods they need to purchase urgently. 

## Getting Started

To run the app, first clone down this repository by copying the repository git URL and running the following command in your terminal:

`git clone https://github.com/laurkim/basket.git`

After the repository has completed cloning down, run the following line in your terminal to install all the necessary packages for your application and prepare the app's configuration: 

`npm install`

Finally, run the following line of code and visit *http://localhost:3000* once your client-side server has started running: 

`npm start`

## Contact 

Should you have any questions in regards to Basket, please do not hesitate to reach out to me at laura.kim021@gmail.com! 