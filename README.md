Describe: roboger()

Test: "Number 1 will be replaced with "Beep!"
Code: roboger(1);
Expected Output: "Beep!"

Test: "Number 2 will be replaced with "Boop!"
Code: roboger(2);
Expected Output: "Boop!"

Test: "Number 3 will be replaced with "Won't you be my neighbor!"
Code: roboger(3);
Expected Output: "Won't you be my neighbor!"

Test: "Any numbers that contain a 1 will be replaced with "Beep!"
Code: roboger(415);
Expected Output: "Beep!"

Test: "Numbers that contain a 2 will be replaced with "Boop!"
Code: roboger(592);
Expected Output: "Boop!"

Test: "Numbers that contain a 3 will be replaced with "Won't you be my neighbor!"
Code: roboger(3546);
Expected Output: "Won't you be my neighbor!"

Test: "Numbers that contain a 1 and 3 or 2 and 3 or 1,2 and 3 will be all be replaced with "Won't you be my neighbor!"
Code: roboger(321);
Expected Output: "Won't you be my neighbor!"

Test: "Numbers that contain a 1 and 2 will be all be replaced with "Won't you be my neighbor!"
Code: roboger(12);
Expected Output: "Won't you be my neighbor!"