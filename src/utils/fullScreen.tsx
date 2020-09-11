interface Doc extends HTMLElement {
    webkitRequestFullScreen?: () => Promise<void>
    mozRequestFullScreen?: () => Promise<void>
}

export const requestFullScreen = () => {
    const doc: Doc = document.documentElement
    if (doc.requestFullscreen) {
        return doc.requestFullscreen();
    } else if (doc.webkitRequestFullScreen) {
        return doc.webkitRequestFullScreen();
    } else if(doc.mozRequestFullScreen) {
        return doc.mozRequestFullScreen();
    }
}

export const exitFullScreen = () => {
    if(document.fullscreenElement) {
        return document.exitFullscreen()
    }
}