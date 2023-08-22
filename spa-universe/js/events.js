import * as el from './elements.js'

export function substitutionUniverse (){ 
  el.aUniverse.addEventListener('click', () => {
    document.body.classList.remove('home-bg')
    document.body.classList.remove('explorer-bg')
    document.body.classList.add('universe-bg')
  })
}

export function substitutionHome (){ 
  el.aHome.addEventListener('click', () => {
    document.body.classList.remove('explorer-bg')
    document.body.classList.remove('universe-bg')
    document.body.classList.add('home-bg')
  })
}

export function substitutionExplorer (){ 
  el.aExplorer.addEventListener('click', () => {
    document.body.classList.remove('home-bg')
    document.body.classList.remove('universe-bg')
    document.body.classList.add('explorer-bg')
  })
}