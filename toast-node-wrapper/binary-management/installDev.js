#!/usr/bin/env node

import { setLocalBinaryPath, install } from "./binary.js";

setLocalBinaryPath(process.argv[2]);
install();
