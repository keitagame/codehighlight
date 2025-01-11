function highlight(code){
  
  const patterns = {
   num: /(?!.*span)\d+/g,
  mot: /[a-zA-Z_]\w*(?=\:)/g,
    string: /(?!.*span)(".*?"|'.*?'|`.*?`)/g,
    keyword: /\b(function|console|return|async|if|else|await|document)\b/g,
    const: /\b(const)\b/g,
    let: /\b(let)\b/g,
    var: /\b(var)\b/g,
   functions: /\b[a-zA-Z_]\w*(?=\s*\()/g, 
   
  
    comment: /(\/\/.*?$|\/\*[\s\S]*?\*\/)/gm
  };
let variableNames = [];
 
  let highlightedCode = code.textContent
  .replace(patterns.mot, '<span style ="color: #00f00f;">$&</span>')
    .replace(patterns.num, '<span style ="color: #00f00f;">$&</span>')

    .replace(patterns.string, '<span style ="color: #ff00ff;">$&</span>')
   .replace(patterns.functions, '<span style ="color: #c000ff;">$&</span>')
 
    .replace(patterns.keyword, '<span class="keyword" style ="color: #00c0ff;">$&</span>')
    .replace(patterns.const, '<span style ="color: orange;">$&</span>')
   .replace(patterns.let, '<span style ="color: red;">$&</span>')
    
    .replace(patterns.var, '<span style ="color: green;">$&</span>')
     .replace(patterns.d, '<span style ="color: blue;">$&</span>')
 
    .replace(patterns.comment, '<span class="comment" style ="color: gray;">$&</span>');
 
  console.log(variableNames);
  code.innerHTML = highlightedCode;
}
