import React from 'react';
import SearchForm from '../components/Filter/NameSearchForm';
import { create } from "react-test-renderer";
import { render, fireEvent, cleanup } from '@testing-library/react';
import store from "../store";
import { Provider } from "react-redux";


describe("SearchForm component", () => {
    test("Matches the snapshot", () => {
      const form = create(<Provider store={store} ><SearchForm /></Provider>);
      expect(form.toJSON()).toMatchSnapshot();
    })});