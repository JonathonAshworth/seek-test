import { resolveComposition } from './composeStyledComponent.jsx'

test('resolveComposition', () => {
    expect(resolveComposition({
        foo: { a: 'yeah', b: 'nah' },
        bar: { composes: 'foo', c: 'yeah' },
    })).toEqual({
        foo: { a: 'yeah', b: 'nah' },
        bar: { composes: 'foo', a: 'yeah', b: 'nah', c: 'yeah' },
    })
})
