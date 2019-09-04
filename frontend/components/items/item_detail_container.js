import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
    let itemId = ownProps.match.params.itemId;
    return ({
        item: state.entities.items[itemId],
    })
};

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);