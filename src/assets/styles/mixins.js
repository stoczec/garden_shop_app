const flex = ({ fd, jc, ai, gap }) => `
display: flex;
flex-direction: ${fd || 'row'};
justify-content: ${jc || 'stretch'};
align-items: ${ai || 'stretch'};
gap: ${gap || 0}
`;

const grid = ({ width, jc, ji, gap }) => `
display: grid;
grid-template-columns: repeat(auto-fit, ${width || '1fr'});
justify-content: ${jc || 'stretch'};
justify-items: ${ji || 'stretch'};
gap: ${gap || 0}
`;

const wrapper = () => `max-width: 1920px;
margin-inline: auto;
min-height: 100%;
overflow: hidden;
`;

const container = ({ width_px, width_percent }) => `
width: min(${width_px || '1384px'}, ${width_percent || '96%'});
margin-inline: auto;`;

export const mixins = { flex, grid, wrapper, container };
