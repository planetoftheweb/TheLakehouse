/*
  # Create reservations table

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with timezone)
      - `date` (date, not null)
      - `time` (time, not null)
      - `party_size` (integer, not null)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text, not null)
      - `special_requests` (text)
      - `location` (text, not null)
      - `status` (text, not null, default: 'pending')

  2. Security
    - Enable RLS on `reservations` table
    - Add policies for inserting and reading reservations
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  date date NOT NULL,
  time time NOT NULL,
  party_size integer NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  special_requests text,
  location text NOT NULL,
  status text NOT NULL DEFAULT 'pending'
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view their own reservations"
  ON reservations
  FOR SELECT
  TO anon
  USING (email = current_user);