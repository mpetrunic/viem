import { utils as ethersV5Utils } from 'ethers'
import { solidityPacked } from 'ethers@6'
import { bench, describe } from 'vitest'
import { encodePacked as web3EncodePacked } from 'web3-utils'

import { address } from '../../_test/constants.js'

import { encodePacked } from './encodePacked.js'

describe('Encode Packed ABI', () => {
  bench('viem: `encodePacked`', () => {
    encodePacked(
      ['address', 'string', 'bytes4[]'],
      [address.vitalik, 'hello world', ['0xdeadbeef', '0xcafebabe']],
    )
  })

  bench('ethers@5: `solidityPack`', () => {
    ethersV5Utils.solidityPack(
      ['address', 'string', 'bytes4[]'],
      [address.vitalik, 'hello world', ['0xdeadbeef', '0xcafebabe']],
    )
  })

  bench('ethers@6: `solidityPacked`', () => {
    solidityPacked(
      ['address', 'string', 'bytes4[]'],
      [address.vitalik, 'hello world', ['0xdeadbeef', '0xcafebabe']],
    )
  })

  bench('web3@4: `solidityPacked`', () => {
    web3EncodePacked(
      { type: 'address', value: address.vitalik },
      { type: 'string', value: 'hello world' },
      { type: 'bytes4[]', value: ['0xdeadbeef', '0xcafebabe'] },
    )
  })
})
