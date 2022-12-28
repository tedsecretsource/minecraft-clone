import Cube from './Cube';

test('renders home page welcome message', () => {
    render(<Cube />);
    const theCube = screen.getByRef(/canvas/);
    expect(theCube).toBeInTheDocument();
});