import { Tag } from "../../../interfaces/Tag";
import { AddProductState } from "./AddProductState";

enum EditTagsActionType {
    REMOVE_TAG = 'REMOVE_TAG',
    ADD_TAG = 'ADD_TAG',
    CLEAR_TAGS = 'CLEAR_TAGS',
}

interface EditTagsAction {
    type: EditTagsActionType
    payload?: any
}

const editTagsReducer = (state: AddProductState, action: EditTagsAction): AddProductState => {
    switch(action.type) {
        case EditTagsActionType.REMOVE_TAG:
            const removedTag = action.payload as Tag

            const tags: Array<Tag> = state.tags.filter(tag =>
                    tag.id !== removedTag.id
                )

            return {
                tags,
            }

        case EditTagsActionType.ADD_TAG:
            const addedTag = action.payload as Tag
            
            return {
                tags: [
                    ...state.tags,
                    addedTag
                ]
            }

        case EditTagsActionType.CLEAR_TAGS:
            return {
                tags: [],
            }

        default: return state
    }
}

export { editTagsReducer, type EditTagsAction, EditTagsActionType }