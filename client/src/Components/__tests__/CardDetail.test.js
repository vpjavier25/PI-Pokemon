import CardDetail from '../CardDetail/CardDetail';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from "@testing-library/react";




describe("required fields must be render", () => {

    test('name tag must be render', () => {
        render(<CardDetail></CardDetail>)
        const name = screen.getByText('name',{exact:false});

        expect(name).toBeInTheDocument();
    });

    test('id tag must be render', () => {
        render(<CardDetail></CardDetail>)
        const id = screen.getByText('id',{exact:false});

        expect(id).toBeInTheDocument();
    });

    test('hp tag must be render', () => {
        render(<CardDetail></CardDetail>)
        const hp = screen.getByText('hp',{exact:false});

        expect(hp).toBeInTheDocument();
    });

    test('attack tag must be render', () => {
        render(<CardDetail></CardDetail>)
        const attack = screen.getByText('attack',{exact:false});

        expect(attack).toBeInTheDocument();
    });

    test('defense tag must be render', () => {
        render(<CardDetail></CardDetail>)
        const defense = screen.getByText('defense',{exact:false});

        expect(defense).toBeInTheDocument();
    });

    test('name tag must be render', () => {
        render(<CardDetail></CardDetail>)
        const types = screen.getByText('types',{exact:false});

        expect(types).toBeInTheDocument();
    });
});

