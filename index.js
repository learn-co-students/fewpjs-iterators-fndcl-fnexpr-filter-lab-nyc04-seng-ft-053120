// Code your solution here
// let findMatching = drivers.filter(match => ({driver === 'string}'))

function findMatching(driver,string) {

     return driver.filter ( checkme =>
        
            string.toUpperCase() === checkme.toUpperCase() 
        )


}


function fuzzyMatch(drivers, string) {

       return drivers.filter( checkme => 
        
          string[0].toUpperCase() === checkme[0].toUpperCase()
        
        )
    

}


function matchName(drivers, string) {

     return drivers.filter(checkme => 
        
         checkme.name === string
        
        
        )


}