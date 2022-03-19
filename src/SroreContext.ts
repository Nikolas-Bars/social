import React from 'react'
import store, {StoreType} from "./redux/store";

const StoreContext:any = React.createContext({} as StoreType)

export default StoreContext