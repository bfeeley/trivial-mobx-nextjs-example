import { storeContext } from '../components/context'
import { TStore } from '../stores/store'
import { useStoreData } from './useStoreData'

export const useRootData = <Selection>(dataSelector: (store: TStore) => Selection) =>
    useStoreData(storeContext, contextData => contextData!, dataSelector)