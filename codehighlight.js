function highlight(code){
  
  const patterns = {
    keyword: /\b(function|if|else|for)\b/g,
    const: /\b(const)\b/g,
    let: /\b(let)\b/g,
    var: /\b(var)\b/g,
    comment: /(\/\/.*?$|\/\*[\s\S]*?\*\/)/gm
  };

 
  let highlightedCode = code.textContent
    .replace(patterns.keyword, '<span class="keyword" style ="color: blue;">$&</span>')
    .replace(patterns.const, '<span style ="color: orange;">$&</span>')
   .replace(patterns.let, '<span style ="color: red;">$&</span>')
    .replace(patterns.var, '<span style ="color: green;">$&</span>')
    .replace(patterns.comment, '<span class="comment" style ="color: gray;">$&</span>');

  code.innerHTML = highlightedCode;
}
