function superQuestion(str) {
	return str + "???";
}
let quest1 = superQuestion("hello");
let quest2 = superQuestion("what even");

quest1;
quest2;

function catStrings(str1, str2) {
	return str1 + " " + str2;
}
cat1 = catStrings("oh", "hi");
cat2 = catStrings("well", "hell back");

cat1;
cat2;

function tripleSub(num1, num2, num3) {
	return num1 - num2 - num3;
}
sub1 = tripleSub(10, 1, 2);
sub2 = tripleSub(8, 3, 5);
sub3 = tripleSub(100, 80, 25);

sub1;
sub2;
sub3;

function tripleSubRev(num1, num2, num3) {
	return num3 - num2 - num1;
}
sub1 = tripleSubRev(10, 1, 2);
sub2 = tripleSubRev(2, 1, 10);

sub1;
sub2;

function tripString(str) {
	return str + str + str;
}

trip1 = tripString("codeimmersives");
trip2 = tripString("is the best");

trip1;
trip2;

function squareRoot(num) {
	return Math.sqrt(num);
}

root1 = squareRoot(16);
root2 = squareRoot(4);
root3 = squareRoot(9);

root1;
root2;
root3;
