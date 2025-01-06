function highlight(code){
  
  const patterns = {
    string: /(".*?"|'.*?'|`.*?`)/g,
    keyword: /\b(function|console)\b/g,
    const: /\b(const)\b/g,
    let: /\b(let)\b/g,
    var: /\b(var)\b/g,
   functions: /\b[a-zA-Z_]\w*(?=\s*\()/g, // 関数名の正規表現
    r: /\b(var|let|const)\s+([a-zA-Z_]\w*)\b/g,
    comment: /(\/\/.*?$|\/\*[\s\S]*?\*\/)/gm
  };
let variableNames = [];
 
  let highlightedCode = code.textContent
    .replace(patterns.string, '<span style ="color: #ff00ff;">$&</span>')
   .replace(patterns.functions, '<span style ="color: #c000ff;">$&</span>')
   .replace(patterns.r, '<span style ="color: #c0ff00;">$&</span>')
    .replace(patterns.keyword, '<span class="keyword" style ="color: blue;">$&</span>')
    .replace(patterns.const, '<span style ="color: orange;">$&</span>')
   .replace(patterns.let, '<span style ="color: red;">$&</span>')
    
    .replace(patterns.var, '<span style ="color: green;">$&</span>')
    
    .replace(patterns.comment, '<span class="comment" style ="color: gray;">$&</span>');
  console.log(variableNames);
  code.innerHTML = highlightedCode;
}
