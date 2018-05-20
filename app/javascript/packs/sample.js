
const Sample = {
  basicTypes: () => {
    // Boolean
    let isDone: boolean = false;

    // Number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

    // String
    let color: string = "red";

    let fullName: string = "John Titor";
    let age: number = 34;
    let sentence: string = `My name is ${fullName}. I'm ${age} years old.
    but that may be ${isDone}.`;
    console.log(sentence);

    // Array
    let colors: string[] = ["red", "blue", "green"];
    let memoryspace: Array<number> = [0, 1, 2, 3, 4];

    // Tuple
    let string_and_number: [string, number];
    string_and_number = ["meow", 1];
    // string_and_number = [1, "two"]; => Error

    // Enum
    enum Color { Red, Green, Blue };
    let r: Color = Color.Red; // => 0
    let g: Color = Color.Green; // => 1
    let b: Color = Color.Blue; // => 2

    // None
    let notTyped: any = undefined;
    let Null: number | null = null;

    // Type Assetion
    let thisMustBeString: any = "okay, this is a string";
    let strLength1: number = (<string>thisMustBeString).length; // assumes it should be a string
    let strLength2: number = (thisMustBeString as string).length; // assumes it should be a string
  }
}

export default Sample;
