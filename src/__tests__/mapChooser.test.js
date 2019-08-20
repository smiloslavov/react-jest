import mapChooser from '../mapChooser';

describe("mapChooser", function () {
    it('returns portland.png when portland pass to it', function () {
        let expected = "portland.png";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });

    it('returns none.png when no input is given', function () {
        let expected = "none.png";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
});