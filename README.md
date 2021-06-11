# _Array and Looping_

#### _This is my website written in HTML, CSS, and Javascript to practice array and looping algorithms_

#### By _Andrew Giang_

## Technologies Used

* _HTML_
* _CSS_
* _bootstrap.css_
* JS
* Jquery

## Description

_This is my website written to take a number from a user and return a range of numbers from 0 to the user's inputted number, replacing any numbers containing 1, 2 or 3 with "beep", "boop", and "won't you be my neighbor?" respectively._

## Setup/Installation Requirements
* Visit [this webpage](https://giang184.github.io/roboger/). 

* Or clone [this]( https://github.com/giang184/roboger) repository to your desktop
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* none

## License

* _[MIT](https://opensource.org/licenses/MIT)_

## Contact Information

* _Andrew Giang giang184@gmail.com_

## Describe: roboger()

- Test: "Number 1 will be replaced with "Beep!"
  - Code: roboger(1);
  - Expected Output: "Beep!"

- Test: "Number 2 will be replaced with "Boop!"
  - Code: roboger(2);
  - Expected Output: "Boop!"

- Test: "Number 3 will be replaced with "Won't you be my neighbor!"
  - Code: roboger(3);
  - Expected Output: "Won't you be my neighbor!"

- Test: "Any numbers that contain a 1 will be replaced with "Beep!"
  - Code: roboger(415);
  - Expected Output: "Beep!"

- Test: "Numbers that contain a 2 will be replaced with "Boop!"
  - Code: roboger(592);
  - Expected Output: "Boop!"

- Test: "Numbers that contain a 3 will be replaced with "Won't you be my neighbor!"
  - Code: roboger(3546);
  - Expected Output: "Won't you be my neighbor!"

- Test: "Numbers that contain a 1 and 3 or 2 and 3 or 1,2 and 3 will be all be replaced with "Won't you be my neighbor!"
  - Code: roboger(321);
  - Expected Output: "Won't you be my neighbor!"  

- Test: "Numbers that contain a 1 and 2 will be all be replaced with "Won't you be my neighbor!"
  - Code: roboger(12);
  - Expected Output: "Won't you be my neighbor!"