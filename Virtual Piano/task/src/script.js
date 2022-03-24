// noinspection JSIgnoredPromiseFromCall

let audio_A, audio_D, audio_F, audio_G, audio_H, audio_J, audio_S, audio_E, audio_T, audio_U, audio_W, audio_Y;

document.addEventListener('keydown', function (e) {
    const keyCode = e.code;
    switch (keyCode) {
        case 'KeyA':
            audio_A = new Audio('./assets/A.mp3');
            audio_A.play();
            break;
        case 'KeyS':
            audio_S = new Audio('./assets/S.mp3');
            audio_S.play();
            break;
        case 'KeyD':
            audio_D = new Audio('./assets/D.mp3');
            audio_D.play();
            break;
        case 'KeyF':
            audio_F = new Audio('./assets/F.mp3');
            audio_F.play();
            break;
        case 'KeyG':
            audio_G = new Audio('./assets/G.mp3');
            audio_G.play();
            break;
        case 'KeyH':
            audio_H = new Audio('./assets/H.mp3');
            audio_H.play();
            break;
        case 'KeyJ':
            audio_J = new Audio('./assets/J.mp3');
            audio_J.play();
            break;
        case 'KeyW':
            audio_W = new Audio('./assets/W.mp3');
            audio_W.play();
            break;
        case 'KeyY':
            audio_Y = new Audio('./assets/Y.mp3');
            audio_Y.play();
            break;
        case 'KeyU':
            audio_U = new Audio('./assets/U.mp3');
            audio_U.play();
            break;
        case 'KeyT':
            audio_T = new Audio('./assets/T.mp3');
            audio_T.play();
            break;
        case 'KeyE':
            audio_E = new Audio('./assets/E.mp3');
            audio_E.play();
            break;
        default:
            console.warn('The \'' + keyCode + '\' key is not supported.');
    }
});