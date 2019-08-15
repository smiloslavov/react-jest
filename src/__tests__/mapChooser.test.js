import mapChooser from '../mapChooser';

describe("mapChooser", function () {
    it('returns portland.jpg when portland pass to it', function () {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });

    it('returns default.jpg when no input is given', function () {
        let expected = "default.jpg";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
});