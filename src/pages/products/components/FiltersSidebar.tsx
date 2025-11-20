import FiltersSidebar from '../../../components/feature/FiltersSidebar';

interface FiltersSidebarWrapperProps {
  onFilterChange: (filters: {
    category?: string;
    brand?: string;
    condition?: string;
    minPrice?: number;
    maxPrice?: number;
  }) => void;
}

export default function FiltersSidebarWrapper(props: FiltersSidebarWrapperProps) {
  return <FiltersSidebar {...props} />;
}
