function generateMarkdown(response)  {
    return `
    #${response.title}
    ### Author: ${response.author}
    ### Github User: ${response.github}
    ###Project link: ${response.url}
    ###Project Description: ${response.description}
    ###Project license: ${response.license}
    

    ##### please contact ${response.email}
    
    
    `
}


module.exports = generateMarkdown;

//learn more about module.exports