// Pres and Aly's solution
let abbreviate=(string)=>{
  let splitString = string.split(" ")
  let result = []
  let final = []
  splitString.forEach(s => {
    if (s.includes('-') {
      s = s.split("-")
      s.forEach(p => {
        if (p.length >= 4) {
          let count = p.length - 2;
          let answer = p[0] + count + p[p.length - 1]
          result.push(answer)
        }
        else {
          result.push(p)
        }
      })
      result=result.join("-")
      final.push(result)
      // console.log(final)
    }
    else {
      if (s.length >= 4) {
        let count = s.length - 2;
        let answer = s[0] + count + s[s.length - 1]
        final.push(answer)
      }
      else
      {
        final.push(s)
      }
    }
  }
  )
  final=final.join(" ")
  // console.log(final)
  final.replace("^[ \t]+","")
  return final
}