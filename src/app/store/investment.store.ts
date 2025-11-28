import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Investment } from "../models/investment.model";
import { Investmentservicenew } from "../services/investmentservicenew";


 
type InvestmentState = {
    investments: Investment[];
    isLoading: boolean;
    error: string | null;
};
 
export const investmentStore = signalStore(
    { providedIn: 'root' },
    // state
    withState<InvestmentState>({
        investments: [],
        isLoading: false,
        error: null
    }),
    // derived values
    withComputed(({ investments }) => ({
        totalInvestment: computed(() =>
            investments().reduce((sum, i) => sum + i.amount, 0)
        ),
        totalCurrent: computed(() =>
            investments().reduce((sum, i) => sum + i.currentValue, 0)
        ),
        totalGain: computed(() => {
            const list = investments();
            const invested = list.reduce((sum, i) => sum + i.amount, 0);
            const current = list.reduce((sum, i) => sum + i.currentValue, 0);
            return current - invested;
        })
    })),
    // methods
    withMethods((store, service = inject(Investmentservicenew)) => ({
        async loadAll() {
            patchState(store, { isLoading: true, error: null });
            try {
                const data = await service.getAll();
                patchState(store, { investments: data, isLoading: false });
            } catch (error) {
                patchState(store, { error: (error as Error).message, isLoading: false });
            }
        }
    })),
    // hooks
    withHooks({
        onInit(store) {
            store.loadAll();
        }
    })
);