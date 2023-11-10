import { describe, expect, test } from 'vitest'

import { usdcContractConfig } from '~test/src/abis.js'
import { accounts } from '~test/src/constants.js'
import { optimismClient } from '~test/src/opStack.js'
import { l2PublicActions } from './public.js'

const opStackClient = optimismClient.extend(l2PublicActions())

test('default', async () => {
  expect(l2PublicActions()(optimismClient)).toMatchInlineSnapshot(`
    {
      "estimateContractL1Fee": [Function],
      "estimateContractL1Gas": [Function],
      "estimateContractTotalFee": [Function],
      "estimateContractTotalGas": [Function],
      "estimateL1Fee": [Function],
      "estimateL1Gas": [Function],
      "estimateTotalFee": [Function],
      "estimateTotalGas": [Function],
    }
  `)
})

describe('smoke test', () => {
  test('estimateContractL1Gas', async () => {
    const gas = await opStackClient.estimateContractL1Gas({
      ...usdcContractConfig,
      address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
      account: '0xc8373edfad6d5c5f600b6b2507f78431c5271ff5',
      functionName: 'transfer',
      args: ['0xc8373edfad6d5c5f600b6b2507f78431c5271ff5', 1n],
    })
    expect(gas).toBeDefined()
  })

  test('estimateContractTotalGas', async () => {
    const gas = await opStackClient.estimateContractTotalGas({
      ...usdcContractConfig,
      address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
      account: '0xc8373edfad6d5c5f600b6b2507f78431c5271ff5',
      functionName: 'transfer',
      args: ['0xc8373edfad6d5c5f600b6b2507f78431c5271ff5', 1n],
    })
    expect(gas).toBeDefined()
  })

  test('estimateContractL1Fee', async () => {
    const fee = await opStackClient.estimateContractL1Fee({
      ...usdcContractConfig,
      address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
      account: '0xc8373edfad6d5c5f600b6b2507f78431c5271ff5',
      functionName: 'transfer',
      args: ['0xc8373edfad6d5c5f600b6b2507f78431c5271ff5', 1n],
    })
    expect(fee).toBeDefined()
  })

  test('estimateContractTotalFee', async () => {
    const fee = await opStackClient.estimateContractTotalFee({
      ...usdcContractConfig,
      address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
      account: '0xc8373edfad6d5c5f600b6b2507f78431c5271ff5',
      functionName: 'transfer',
      args: ['0xc8373edfad6d5c5f600b6b2507f78431c5271ff5', 1n],
    })
    expect(fee).toBeDefined()
  })

  test('estimateL1Gas', async () => {
    const gas = await opStackClient.estimateL1Gas({
      account: accounts[0].address,
    })
    expect(gas).toBeDefined()
  })

  test('estimateTotalGas', async () => {
    const gas = await opStackClient.estimateTotalGas({
      account: accounts[0].address,
    })
    expect(gas).toBeDefined()
  })

  test('estimateL1Fee', async () => {
    const fee = await opStackClient.estimateL1Fee({
      account: accounts[0].address,
    })
    expect(fee).toBeDefined()
  })

  test('estimateTotalFee', async () => {
    const fee = await opStackClient.estimateTotalFee({
      account: accounts[0].address,
    })
    expect(fee).toBeDefined()
  })
})
