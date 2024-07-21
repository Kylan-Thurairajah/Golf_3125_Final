import React from "react"
import { Form, Button } from "react-bootstrap"
import "./App.css"

const FacetedSearch = ({ selectedFilters, onFilterChange, onSearch }) => {
  const handleFilterChange = (e) => {
    const { id, checked } = e.target
    onFilterChange(id, checked)
  }

  return (
    <Form className="faceted-filter-form faceted-search-background">
      <Form.Check
        type="checkbox"
        label="Sand Bunkers"
        id="sand bunker"
        onChange={handleFilterChange}
      />
      <Form.Check
        type="checkbox"
        label="Water Hazards"
        id="water hazards"
        onChange={handleFilterChange}
      />
      <Form.Check
        type="checkbox"
        label="Roughs"
        id="roughs"
        onChange={handleFilterChange}
      />
      <Form.Check
        type="checkbox"
        label="Elevated Tees"
        id="elevated tee"
        onChange={handleFilterChange}
      />
      <Form.Check
        type="checkbox"
        label="Doglegs"
        id="doglegs"
        onChange={handleFilterChange}
      />
      <Button variant="dark" className="mt-3" onClick={onSearch}>
        Search
      </Button>
    </Form>
  )
}

export default FacetedSearch
