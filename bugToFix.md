1. tyepscript bug- I want to be able to create components for image gallery and product details but I cant work out hwo to pass props which can be undefined before they are passed to the component. I need to know this so i can abstract and make application neater, currently I cant pass props basically. I need to try stack overflow for this. THIS IS FIXED BY SETTING A CONDITIONAL STATEMENT IN THE COMPONENT TO MAKE SURE THE PROPS ARE NOT NULL THEN PASSING THEM, ALOT BETTER WAY THAN ACCEPTING NULL PROPS IN THE COMPONENT AND CHECKING FOR EACH USE IF IT IS NOT NULL

i.e product && product.title

for each time I use it above is not good

2. testing bug- cant seem to test that the button is disabled when the value is 1, product.test.js

3. scroll to the top doesnt work on the go back button
