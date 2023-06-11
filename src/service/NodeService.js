export default class NodeService {
    getTreeTableNodes() {
        return fetch(' ')
            .then((res) => res.json())
            .then((d) => d.root);
    }

    getTreeNodes() {
        return fetch('demo/data/treenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }
}
