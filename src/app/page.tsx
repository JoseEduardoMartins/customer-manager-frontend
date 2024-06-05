'use client';

import { Table } from '@/components/table/';
import { useCustomers } from './useCustomers';
import { Filters } from '@/components/Filters';

export default function Customers() {
  const { customers, loadCustomers } = useCustomers();

  return (
    <main className="w-full min-h-screen bg-zinc-200 py-4 px-4">
      <div className="w-full m-auto flex flex-col items-center gap-y-6 mt-2">
        <a className="text-black text-2xl font-bold" href="/customer">
          Customer manager
        </a>
        <Filters handleSubmit={loadCustomers} />
        <Table columns={['id', 'Nome', 'Email', 'Opções']} rows={customers} />
      </div>
    </main>
  );
}
