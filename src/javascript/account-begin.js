import setDevEnvironment from './environment'

document.addEventListener('DOMContentLoaded', async function() {
    await setDevEnvironment('all:account-begin')
    let getI18nMsg = chrome.i18n.getMessage
    document.getElementById('title').innerHTML = getI18nMsg('getting_started')
    document.getElementById('portal').innerHTML = getI18nMsg('go_to_portal')
    document.getElementById('portalLink').innerHTML = getI18nMsg('portal_link')
    let pairingButton = document.getElementById('pair')
    pairingButton.innerHTML = getI18nMsg('pair_a_device')
    pairingButton.onclick = function(e) {
        e.preventDefault()
        window.location.href = 'account-link.html'
    }
    document.getElementById('portalLink').onclick = function() {
        chrome.tabs.create({ url: 'https://portal.hedera.com' })
    }
})
