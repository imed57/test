import { JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import { NetworkId } from "src/constants";

export interface IJsonRPCError {
  readonly message: string;
  readonly code: number;
}

export interface IBaseAsyncThunk {
  readonly networkID: NetworkId;
  readonly provider: StaticJsonRpcProvider | JsonRpcProvider;
}

export interface IValueOnlyAsyncThunk extends IBaseAsyncThunk {
  readonly value: BigNumber;
}

export interface IChangeApprovalAsyncThunk extends IBaseAsyncThunk {
  readonly token: string;
  readonly address: string;
}

export interface IChangeApprovalWithVersionAsyncThunk extends IChangeApprovalAsyncThunk {
  readonly version2: boolean;
}

export interface IValueAsyncThunk extends IBaseAsyncThunk {
  readonly value: string;
  readonly address: string;
}

export interface IActionValueAsyncThunk extends IValueAsyncThunk {
  readonly action: string;
}

export interface IActionValueGasAsyncThunk extends IActionValueAsyncThunk {
  readonly gas: number;
  readonly version2: boolean;
  readonly rebase: boolean;
}

export interface IBaseAddressAsyncThunk extends IBaseAsyncThunk {
  readonly address: string;
}

export interface IZapAsyncThunk extends IBaseAddressAsyncThunk {
  readonly tokenAddress: string;
  readonly sellAmount: BigNumber;
  readonly slippage: string;
  readonly minimumAmount: string;
  readonly gOHM: boolean;
}

// Account Slice
