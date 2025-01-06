function highlight(code){
  
  const patterns = {
    keyword: /\b(function|if|else|for)\b/g,
   
    comment: /(\/\/.*?$|\/\*[\s\S]*?\*\/)/gm
  };

 
  let highlightedCode = code.textContent
    .replace(patterns.keyword, '<span class="keyword" style ="color: blue;">$&</span>')
   
    .replace(patterns.comment, '<span class="comment" style ="color: gray;">$&</span>');

  code.innerHTML = highlightedCode;
}
