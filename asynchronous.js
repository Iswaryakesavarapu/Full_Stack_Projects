/*import fs from "fs";

const data =
  "This is a sample text file created using asynchronous file operation in node.js";

console.log("Before Writing");

fs.writeFile("sample1.txt", data, "utf8", (err) => {
  if (err) {
    console.log("Error writing File:", err);
    return;
  }
  console.log("File created successfully using asynchronous file operation.");
  console.log("After Writing");
  console.log("Complete writing file asynchronously.");

  console.log("Before Reading");

  fs.readFile("sample1.txt", "utf8", (err, readData) => {
    if (err) {
      console.log("Error Reading File:", err);

      return;
    }

    console.log("File read successfully using asynchronous file operation.");
    console.log(readData);

    console.log("After Reading");
    console.log("Complete reading file asynchronously.");

    
    const appendData =
      "\nThis is additional data added using append operation.";
    console.log("Before Appending");
    fs.appendFile("sample1.txt", appendData, "utf8", (err) => {
      if (err) {
        console.log("Error appending File:", err);
        return;
      }
      console.log("File appended successfully.");
      console.log("After Appending");
      console.log("Complete appending file asynchronously.");
    });
  });
});
*/
import fs from "fs";

console.log("Program started");

fs.writeFile("sample.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error("Error while writing file:", err);
    return;
  }

  console.log("File created and data written");

  fs.readFile("sample.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error while reading file:", err);
      return;
    }

    console.log("File data:", data);
    console.log("Program ended");
  });
});

console.log("Program continues");
