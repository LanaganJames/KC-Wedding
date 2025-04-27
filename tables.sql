SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Database: sdc310_wk3pa
CREATE DATABASE IF NOT EXISTS sdc310_midterm DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE sdc310_midterm;

-- Table structure for table personal_info
DROP TABLE IF EXISTS personal_info;
CREATE TABLE personal_info (
  AddressNo int(11) NOT NULL,
  First varchar(25) NOT NULL,
  Last varchar(50) NOT NULL,
  Street varchar(100) NOT NULL,
  City varchar(25) NOT NULL,
  State varchar(2) NOT NULL,
  Zip int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Data for table personal_info
INSERT INTO personal_info (AddressNo, First, Last, Street, City, State, Zip) VALUES
(1, 'Grace', 'FIebig', '1234 Wilson', 'Chicago', 'IL', '60625'),
(2, 'James', 'Lanagan', '1234 Wilson', 'Chicago', 'IL', '60625');

-- Indexes for table personal_info
ALTER TABLE personal_info
  ADD PRIMARY KEY (AddressNo);

-- AUTO_INCREMENT for table personal_info
ALTER TABLE personal_info
  MODIFY AddressNo int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
