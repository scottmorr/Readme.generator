function gitHubURL(github, title) {
    const caseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${github}/${caseTitle}`

}
function renderBadge(license, github, title) {
    if (license !== "None") {
        return ` [![License](https://img.shields.io/badge/License-${license}-blue.svg)](${gitHubURL(github, title)})`
       
}
}

function generateMarkdown(response) {
    return `
    
    # Project Title: ${response.title}
    ### Authors: ${response.author}
    ### Github User: ${response.github}
    ###Project link: ${gitHubURL(response.github, response.title)}
    ###Project Description: ${response.description}
    ###Project license: ${renderBadge(response.license, response.github, response.title)}
    

    ##### please contact ${response.email}
    
    
    `
}


module.exports = generateMarkdown;

//learn more about module.exports