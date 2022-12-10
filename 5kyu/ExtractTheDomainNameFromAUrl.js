// DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  if(url.indexOf('www.') !== -1){
    url = url.slice(url.indexOf('www.')+4)
    return url.slice(0, url.indexOf('.'))
  }  
  else if(url.indexOf('https') !== -1 ){
    return url.slice(url.indexOf('https')+8, url.indexOf('.'))
  }
  else if(url.indexOf('http') !== -1){
    return url.slice(url.indexOf('http')+7, url.indexOf('.'))
  }
  else{
    return url.slice(0, url.indexOf('.'))
  }
}

// LEARN REPLACE
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };