import phoneFormatter from "../PhoneFormatter";

test('to check that foreign phone number is returned in follow format +79270000000', () => {
    expect(phoneFormatter('8 (927) 000-00-00')).toBe('+79270000000');
});

test('to check that local phone number is returned in follow format +79600000000', () => {
    expect(phoneFormatter('+7 960 000 00 00')).toBe('+79600000000');
});

test('to check that local phone number is returned in follow format +860000000000', () => {
    expect(phoneFormatter('+86 000 000 0000')).toBe('+860000000000');
});