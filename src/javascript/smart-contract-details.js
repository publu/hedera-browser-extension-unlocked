import { getLocalStorage } from './models/db'
import { tabsQuery } from './chrome-promise'
import { buttonState } from './ui-utils/buttons'
import getContractCallController from './viewcontroller/grpc/contractcall'
import {
    tinyBarsToHBarsCurr,
    tinyBarsToDollarsUnit,
    tinyBarsToHBarsUnit
} from './hedera/currency'
import debug from 'debug'

const log = debug('all:smart-contract-details')

document.addEventListener('DOMContentLoaded', async () => {
    let getI18n = chrome.i18n.getMessage
    document.getElementById('smartContractText').innerHTML = getI18n(
        'smart_contract_text'
    )
    document.getElementById('contractIDText').innerHTML = getI18n(
        'contract_id_text'
    )
    document.getElementById('transactionCostText').innerHTML = getI18n(
        'transaction_cost_text'
    )
    document.getElementById('propertyLocationText').innerHTML = getI18n(
        'property_location_text'
    )
    document.getElementById('starCostText').innerHTML = getI18n(
        'star_cost_text'
    )
    document.getElementById('totalCostText').innerHTML = getI18n(
        'total_cost_text'
    )
    document.getElementById('smartContractTNC').innerHTML = getI18n(
        'smart_contract_tnc'
    )
    document.getElementById('acceptButtonText').innerHTML = getI18n(
        'accept_button_text'
    )
    document.getElementById('denyButtonText').innerHTML = getI18n(
        'deny_button_text'
    )
    // which URL is the user on
    const q = { active: true, currentWindow: true }
    let tabs = await tabsQuery(q)
    let currTab = tabs[0]
    let url = new URL(currTab.url)

    log(url.origin + url.pathname)

    let prefix = 'hedera-contract-'
    let urlString = url.origin + url.pathname
    let contractTagKey = prefix + urlString
    let contractTag = await getLocalStorage(contractTagKey)
    log(contractTag)

    if (window.location.protocol !== 'chrome-extension:') {
        if (contractTag === undefined || contractTag === null) {
            window.location.href = 'smart-contract.html'
            return
        }
    }

    // locate our dom elements (UI elements)
    let contractIDEl = document.getElementById('contract-id')
    let totalCostEl = document.getElementById('total-cost')
    let transactionCostEl = document.getElementById('transaction-cost')
    let propertyLocationEl = document.getElementById('property-location')
    let purchasedPriceEl = document.getElementById('purchased-price')
    let acceptButtonEl = document.getElementById('accept')
    // what about the deny button? What if the user clicks on "deny"? TODO?

    // assign the params
    if (contractTag !== undefined) {
        let params = contractTag.params
        let contractid = contractTag.contractid
        let transactionCostInUsdObj
        let transactionCostInHbar
        if (transactionCostEl !== undefined) {
            transactionCostInUsdObj = tinyBarsToDollarsUnit(200000)
            transactionCostInHbar = tinyBarsToHBarsUnit(200000)
            transactionCostEl.value =
                `$ ${transactionCostInUsdObj.toNumber()}` +
                ' / ' +
                `${transactionCostInHbar.toPrecision(8)} ℏ`
        }
        let x = params[2]
        let y = params[3]
        let propertyLocation = 'x: ' + x + ', y: ' + y
        if (propertyLocationEl !== undefined) {
            propertyLocationEl.value = propertyLocation
        }

        let purchasedPrice = params[1]
        let purchasedPriceInUsdObj
        let purchasedPriceInHbar
        if (purchasedPrice !== undefined) {
            purchasedPriceInUsdObj = tinyBarsToDollarsUnit(
                parseInt(purchasedPrice)
            )
            let purchasedPriceInUsd = purchasedPriceInUsdObj.toNumber()
            purchasedPriceInHbar = tinyBarsToHBarsUnit(parseInt(purchasedPrice))
            purchasedPriceEl.value =
                `$ ${purchasedPriceInUsd}` +
                ' / ' +
                `${purchasedPriceInHbar.toPrecision(8)} ℏ`
        }

        contractIDEl.value = contractid
        let totalCostHbars =
            purchasedPriceInHbar.toNumber() + transactionCostInHbar.toNumber()
        let totalCostUsd =
            transactionCostInUsdObj.toNumber() +
            purchasedPriceInUsdObj.toNumber()
        totalCostEl.value =
            `$ ${totalCostUsd.toFixed(10)}` +
            ' / ' +
            `${totalCostHbars.toFixed(8)} ℏ`

        if (acceptButtonEl !== undefined) {
            acceptButtonEl.onclick = async function(e) {
                e.preventDefault()
                buttonState(acceptButtonEl, 'loading')
                await getContractCallController(contractTag, urlString)
            }
        }
    }
})
