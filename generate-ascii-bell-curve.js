with (Math) {
    // Parameters
    // Left/right: z-values to display
    // hScale: number of horizontal chars
    // vScale: number of vertical chars
    const left = -3.5
    const right = 3.5
    const hScale = 50
    const vScale = 20

    const height = []
    for (let x = left; x < right; x += (right - left) / hScale) {
        height.push((1 / sqrt(2 * PI)) * E ** (-0.5 * x ** 2))
    }

    const high = max(...height)
    const low = min(...height)

    const rows = []
    for (let y = low; y < high; y += (high - low) / vScale) {
        rows.push(height.map(height => height >= y ? '#' : ' ').join(''))
    }

    rows.reverse()

    console.log(rows.join('\r\n'))
}

//                        #####                      
//                       #######                     
//                      #########                    
//                      #########                    
//                     ###########                   
//                    #############                  
//                    #############                  
//                   ###############                 
//                   ###############                 
//                  #################                
//                 ###################               
//                 ###################               
//                #####################              
//               #######################             
//               #######################             
//              #########################            
//             ###########################           
//           ###############################         
//         ###################################       
// ##################################################
