import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types";



describe('tests en ui-actions', () => {
    test('should have all actions working ok', () => {
        
        const removeErrorAction = removeError()

        const starLoadingAction = startLoading()

        const finishLoadingAction = finishLoading()

        const action = setError('Errorrrrrrr');

        
        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'Errorrrrrrr'
        });


        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        })    
        expect(starLoadingAction).toEqual({
            type: types.uiStartLoading
        })
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        })

    })
    
})
