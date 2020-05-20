FileStuff = {};


FileStuff.writeFile = function(fileObj, fileContent, encoding) {

  encoding = encoding || "utf-8";

  fileObj = (fileObj instanceof File) ? fileObj : new File(fileObj);

  var parentFolder = fileObj.parent;

  if (!parentFolder.exists && !parentFolder.create())

      throw new Error("Cannot create file in path " + fileObj.fsName);

  fileObj.encoding = encoding;

  fileObj.open("w");

  fileObj.write(fileContent);

  fileObj.close();

  return fileObj;

}