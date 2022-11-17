function shout(string) {
    return string.toUpperCase()
}
// describe('shout(string)', function() {
 //   it('receives one argument and returns it in all caps', function() {
  //    expect(shout('hello')).toEqual('HELLO');

  function whisper(string) {
    return string.toLowerCase()
  }

  function logShout(string) {
    console.log (string.toUpperCase())
  }
  
  function logWhisper(string) {
    console.log (string.toLowerCase())
  }




  function sayHiToHeadphonedRoommate (string) { 
    if (string === shout(string))
        return(`YES INDEED!`)
        else if (string === whisper(string)) 
         return `I can't hear you!` 
          else if (string === "Let's have dinner together!") 
          return `I would love to!` 
  }
    
