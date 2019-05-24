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
        let amountInUsdObj
        let amountInHbar
        if (transactionCostEl !== undefined) {
            amountInUsdObj = tinyBarsToDollarsUnit(200000)
            amountInHbar = tinyBarsToHBarsUnit(200000)
            transactionCostEl.value =
                `$ ${amountInUsdObj.toNumber()}` +
                ' / ' +
                `${amountInHbar.toPrecision(8)} ℏ`
        }
        let x = params[2]
        let y = params[3]
        let propertyLocation = 'x: ' + x + ', y: ' + y
        if (propertyLocationEl !== undefined) {
            propertyLocationEl.value = propertyLocation
        }

        let starPrice = params[1]
        let purchasedPriceInUsdObj
        let purchasedPriceInHbar
        if (starPrice !== undefined) {
            purchasedPriceInUsdObj = tinyBarsToDollarsUnit(
                parseInt(starPrice) + 200000
            )
            let purchasedPriceInUsd = `$${purchasedPriceInUsdObj.toNumber()}`
            purchasedPriceInHbar = tinyBarsToHBarsUnit(
                parseInt(starPrice) + 200000
            )
            purchasedPriceEl.value =
                `$ ${purchasedPriceInUsd}` +
                ' / ' +
                `${purchasedPriceInHbar.toPrecision(8)} ℏ`
        }

        contractIDEl.value = contractid
        let totalCostHbars =
            purchasedPriceInHbar.toNumber() + amountInHbar.toNumber()
        totalCostEl.value =
            `$ ${amountInUsdObj.toNumber() +
                purchasedPriceInUsdObj.toNumber()}` +
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
